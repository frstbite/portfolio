import { Children, useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  AnimationSequence,
  motion,
  Target,
  Transition,
  useAnimate,
  useAnimationFrame,
} from "framer-motion"
import { v4 as uuidv4 } from "uuid"

import { useMouseVector } from "@/hooks/use-mouse-vector"

type TrailSegment = [Target, Transition]

type TrailAnimationSequence = TrailSegment[]

interface ImageTrailProps {
  children: React.ReactNode
  containerRef?: React.RefObject<HTMLElement>
  newOnTop?: boolean
  rotationRange?: number
  animationSequence?: TrailAnimationSequence
  interval?: number
  velocityDependentSpawn?: boolean
  bottomThreshold?: number // Pixels from bottom to disable trail
}

interface TrailItem {
  id: string
  x: number
  y: number
  rotation: number
  animationSequence: TrailAnimationSequence
  scale: number
  child: React.ReactNode
}

const ImageTrail = ({
  children,
  newOnTop = true,
  rotationRange = 15,
  containerRef,
  animationSequence = [
    [{ scale: 1.2 }, { duration: 0.1, ease: "circOut" }],
    [{ scale: 0 }, { duration: 0.5, ease: "circIn" }],
  ],
  interval = 200,
  bottomThreshold = 100, // Default to 100px from bottom
}: ImageTrailProps) => {
  const [trail, setTrail] = useState<TrailItem[]>([])
  const lastAddedTimeRef = useRef<number>(0)
  const isOverInteractiveRef = useRef(false)
  const isNearBottomRef = useRef(false)
  
  const { position: mousePosition } = useMouseVector(containerRef)
  const lastMousePosRef = useRef(mousePosition)
  const currentIndexRef = useRef(0)
  
  const childrenArray = useMemo(() => Children.toArray(children), [children])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      isOverInteractiveRef.current = !!target.closest(
        'button, a, input, select, textarea, [role="button"]'
      )

      // Check if near bottom of container
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const distanceFromBottom = rect.bottom - e.clientY
        isNearBottomRef.current = distanceFromBottom < bottomThreshold
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [containerRef, bottomThreshold])

  const addToTrail = useCallback(
    (mousePos: { x: number; y: number }) => {
      const newItem: TrailItem = {
        id: uuidv4(),
        x: mousePos.x,
        y: mousePos.y,
        rotation: (Math.random() - 0.5) * rotationRange * 2,
        animationSequence,
        scale: 1,
        child: childrenArray[currentIndexRef.current],
      }

      currentIndexRef.current = (currentIndexRef.current + 1) % childrenArray.length

      setTrail((prev) => (newOnTop ? [...prev, newItem] : [newItem, ...prev]))
    },
    [childrenArray, rotationRange, animationSequence, newOnTop]
  )

  const removeFromTrail = useCallback((itemId: string) => {
    setTrail((prev) => prev.filter((item) => item.id !== itemId))
  }, [])

  useAnimationFrame((time) => {
    if (
      isOverInteractiveRef.current ||
      isNearBottomRef.current ||
      (lastMousePosRef.current.x === mousePosition.x &&
        lastMousePosRef.current.y === mousePosition.y)
    ) {
      return
    }
    lastMousePosRef.current = mousePosition

    if (time - lastAddedTimeRef.current < interval) {
      return
    }

    lastAddedTimeRef.current = time
    addToTrail(mousePosition)
  })

  return (
    <div className="relative w-full h-full pointer-events-none">
      {trail.map((item) => (
        <TrailItem key={item.id} item={item} onComplete={removeFromTrail} />
      ))}
    </div>
  )
}

interface TrailItemProps {
  item: TrailItem
  onComplete: (id: string) => void
}

const TrailItem = ({ item, onComplete }: TrailItemProps) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const sequence = item.animationSequence.map((segment: TrailSegment) => [
      scope.current,
      ...segment,
    ])

    animate(sequence as AnimationSequence).then(() => {
      onComplete(item.id)
    })
  }, [animate, item.animationSequence, item.id, onComplete, scope])

  return (
    <motion.div
      ref={scope}
      className="absolute"
      style={{
        left: item.x,
        top: item.y,
        rotate: item.rotation,
      }}
    >
      {item.child}
    </motion.div>
  )
}

export { ImageTrail }
