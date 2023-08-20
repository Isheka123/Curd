import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex justify-between items-center bg-slate-800 px-12 py-5' 
    style={{
      width: '100%', 
    }} >
      <Link className='text-white font-bold' href={"/"}>Radhakrishn</Link>
      <Link className="bg-white p-3 py-2 rounded" href={"/addTopic"}>Add Topic</Link>
    </div>
  );
}
