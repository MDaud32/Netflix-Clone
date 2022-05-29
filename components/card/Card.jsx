import Image from 'next/image';
import { motion } from 'framer-motion';

const Card = ({ imgUrl, size, id }) => {
  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };
  return (
    <div className="px-1 py-6 h-full text-white">
      <div className="h-[26rem] w-[13rem]">
        <motion.img
          whileHover={{ ...scale, transition: { duration: 0.2 } }}
          className="h-[26rem] w-[13rem] object-cover  object-center rounded-md relative z-50"
          src={imgUrl}
          alt="card image"
        />
      </div>
    </div>
  );
};

export default Card;
