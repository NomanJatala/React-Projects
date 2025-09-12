export default function Button(props) {
  return (
    <button
      onClick={() => props.toggle(props.id)}
      className={`p-3 cursor-pointer px-5 font-extrabold text-2xl shadow-lg border m-2 rounded-lg hover:scale-105 transition-all duration-100 active:scale-95 ${
        props.isHeld ? "bg-[#59E391]" : "bg-white"
      }`}
    >
      {props.value}
    </button>
  );
}
