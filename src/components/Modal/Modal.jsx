import { useContext, useEffect } from "react";
import { AuthContex } from "../../provider/AuthProvider";

const Modal = () => {
  const { modalOpen, setModalOpen, modalMessage, setModalMessage } =
    useContext(AuthContex);
  const control = () => {
    setModalMessage("");
    setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      // Prevent scrolling when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    modalOpen && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>

        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-[#0f172a] border border-color-border p-5 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="grid h-full grid-cols-1 ">
            <div className="flex flex-col justify-center py-10">
              <h3 className="mb-2 text-lg text-center font-bold text-red-600">
                {modalMessage}
              </h3>
            </div>
          </div>
        </div>
      </>
    )
  );

  // </section>
};

export default Modal;
