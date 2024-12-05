import { products } from "../data/data";
import Paragraph from "../component/paragraph";
import Image from "../component/image";
import Button from "../component/button";
import H1 from "../component/h1";
import H3 from "../component/h3";

export function Card() {
  return (
    <div className="grid grid-cols-4 ml-20 mb-20">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-slate-200 mt-20 w-[300px] rounded-lg shadow-2xl"
        >
          <div className="mx-auto">
            <Image
              className="rounded-lg"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
          <div className="p-5">
            <div className=" text-[14px] mt-3">
              <H1 detail={product.name} />
            </div>
            <div className=" text-[14px] mt-3">
              <H3 detail={product.price} />
            </div>
            <div className=" text-[14px] mt-3">
              <Paragraph detail={product.description} />
            </div>
            <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5">
              <Button />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}