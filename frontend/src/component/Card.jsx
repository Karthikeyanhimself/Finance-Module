export default function Card({ name }) {
    return (
        <div className="bg-stone-800 flex flex-col justify-center items-center p-6 rounded-2xl 
            shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 
            bg-gradient-to-b from-stone-800 to-stone-900 hover:from-stone-700 hover:to-stone-800">
            
            <img src="../scarf.png" className="h-20 w-20 mb-4 object-contain" alt={`${name} icon`} />
            <div className="text-white text-xl font-semibold">{name}</div>
        </div>
    );
}
