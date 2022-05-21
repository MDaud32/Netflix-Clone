import Image from 'next/image';
import { motion } from 'framer-motion';

const Card = ({ imgUrl, size }) => {
  return (
    <div className="px-1 py-6 w-full h-full text-white">
      <div className="h-[26rem] w-[13rem]">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          className="h-[26rem] w-[13rem] mr-[0.7rem] object-cover  object-center rounded-md relative z-50"
          src={imgUrl}
          alt="card image"
        />
      </div>
    </div>
  );
};

export default Card;
