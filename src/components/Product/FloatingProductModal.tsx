import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../UI/Modal";
import Icon from "../UI/Icon";
import productsData from "../../db/products.json";
import {BsBasket} from "react-icons/bs";

interface IProps {
  initiallyOpen?: boolean;
}

const FloatingProductModal: React.FC<IProps> = ({ initiallyOpen = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(initiallyOpen);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Display only the first 3 products in the modal
  const productsToShow = productsData.slice(0, 3);

  return (
    <>
      <motion.button
        onClick={handleOpenModal}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="fixed bottom-36 table:bottom-20 right-6 z-40 flex items-center justify-center p-4 rounded-full bg-primary-cl text-primary-bg shadow-lg hover:opacity-90"
      >
        <BsBasket color={'#000'} size={20}/>
      </motion.button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Featured Products">
        <div className="grid grid-cols-1 gap-6 table:grid-cols-2 desktop:grid-cols-3">
          {productsToShow.map((product) => (
            <div key={product.id} className="border-[0.5px] border-primary-cl">
              <div 
                className="w-full h-[180px] bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${product.imageUrl})` }}
              />
              <div className="p-4">
                <h3 className="font-medium text-[14px] leading-[120%] uppercase mb-2">
                  {product.title}
                </h3>
                <p className="font-light text-[12px] leading-[140%] mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-light text-[12px]">
                    Code: {product.code}
                  </span>
                  <button 
                    className="flex items-center justify-center p-2 border-[0.5px] border-primary-cl hover:opacity-70"
                    onClick={() => alert(`Product ${product.title} added to cart`)}
                  >
                    <Icon id="plus" width={16} height={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button 
            className="p-3 border-[0.5px] border-primary-cl font-light text-[14px] leading-[120%] uppercase hover:opacity-70"
            onClick={() => window.location.href = "/products"}
          >
            View All Products
          </button>
        </div>
      </Modal>
    </>
  );
};

export default FloatingProductModal; 