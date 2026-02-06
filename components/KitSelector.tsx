"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { kits } from "../data/kits";

export default function KitSelector() {
  const [type, setType] = useState<"sport" | "trad" | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (kitType: "sport" | "trad") => {
    setType(kitType);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => openModal("sport")}
        >
          Sport
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => openModal("trad")}
        >
          Trad
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold mb-4 text-center text-black"
                  >
                    {type?.toUpperCase()} Beginner Kit
                  </Dialog.Title>

                  <div className="flex flex-col gap-4">
                    {type &&
                      kits[type].beginner.map((item, index) => (
                        <div key={index} className="p-4 border rounded">
                          <h3 className="font-bold text-black">{item.name}</h3>
                          <p className="text-black">{item.note}</p>
                          <p className="text-sm text-black">{item.estPrice}</p>
                          <a
                            href={item.affiliate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            Buy here
                          </a>
                        </div>
                      ))}
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 bg-gray-500 rounded"
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
