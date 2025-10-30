
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [selectedImage, setSelectedImage] = React.useState(project.image);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="bg-[#1c1e22] rounded-2xl w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-video rounded-lg overflow-hidden mb-4 border-2 border-[#77c3cf]"
              >
                <img
                  src={selectedImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex gap-2 overflow-x-auto">
                {[project.image, ...(project.galery || [])].map((img, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 ${
                      selectedImage === img
                        ? "border-[#77c3cf]"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`${project.title} thumbnail ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h2>
              <p className="text-white/70">{project.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
