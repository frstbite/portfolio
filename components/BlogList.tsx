"use client";

const posts = [
  {
    title: "The Art of Bug Rebranding: Why 404 is the New 200",
    date: "Sep 22, 2025",
    category: "Philosophy"
  },
  {
    title: "Building with AI: Experimenting with the Future of Code",
    date: "Feb 12, 2025",
    category: "Technology"
  },
  {
    title: "Force Push & Pray: A Developer's Guide to Confidence",
    date: "Mar 11, 2024",
    category: "Learning"
  }
];

export default function BlogList() {
  return (
    <section id="blogs" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 font-mono">THOUGHTS</p>
           <h2 className="text-4xl md:text-5xl font-bold mb-4">Things I Think While Builds Run</h2>
           <p className="text-gray-500 italic">Occasionally overthinking simple solutions.</p>
        </div>

        <div className="max-w-4xl mx-auto">
           {posts.map((post, index) => (
             <div 
               key={index} 
               className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors px-4 rounded-xl -mx-4"
             >
                <div className="mb-2 md:mb-0">
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 font-mono">{post.category}</p>
                   <h3 className="text-xl md:text-2xl font-bold group-hover:underline underline-offset-4 decoration-2 italic">{post.title}</h3>
                </div>
                <p className="text-sm font-medium text-gray-400 font-mono">{post.date}</p>
             </div>
           ))}
           
           <div className="mt-16 flex justify-center">
             <button className="px-10 py-4 bg-white border border-gray-200 rounded-full font-bold hover:border-black transition-all italic">
                View All Thoughts
             </button>
           </div>
        </div>
      </div>
    </section>
  );
}
