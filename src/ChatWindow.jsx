import { RiCloseLine } from "react-icons/ri";

const ChatWindow = ({ onClose }) => {
  return (
    <>
      <div className="h-full flex flex-col overflow-hidden">
        <div className="h-[70px] flex justify-between items-center border-b px-6">
          <h2 className="text-lg font-medium">Chat</h2>
          <button onClick={ onClose } className="w-7 h-7 rounded-full flex items-center justify-center border border-red-500 text-red-500"><RiCloseLine size="20" /></button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto max-w-2xl px-6 py-8">
            <ul className="space-y-5">
              <li className="max-w-lg flex gap-x-2 sm:gap-x-2 me-11">
                <img className="inline-block h-7 w-7 rounded-full" src="https://mighty.tools/mockmind-api/content/human/7.jpg" alt="Image Description" />
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2.5 space-y-3">
                  <p className="text-sm text-gray-800">
                    You can ask questions like:
                  </p>
                </div>
              </li>
              <li className="flex ms-auto gap-x-2 sm:gap-x-2">
                <div className="grow text-end space-y-3">
                  <div className="inline-block bg-blue-600 rounded-2xl px-4 py-2.5 shadow-sm">
                    <p className="text-sm text-white">
                      Hawllo?
                    </p>
                  </div>
                </div>
                <span className="flex-shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-gray-600">
                  <span className="text-sm font-medium text-white leading-none">AZ</span>
                </span>
              </li>
              <li className="max-w-lg flex gap-x-2 sm:gap-x-2 me-11">
                <img className="inline-block h-7 w-7 rounded-full" src="https://mighty.tools/mockmind-api/content/human/7.jpg" alt="Image Description" />
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2.5 space-y-3">
                  <p className="text-sm text-gray-800">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur maxime doloribus at obcaecati incidunt inventore assumenda temporibus ducimus adipisci. Neque.
                  </p>
                </div>
              </li>
              <li className="max-w-lg flex gap-x-2 sm:gap-x-2 me-11">
                <img className="inline-block h-7 w-7 rounded-full" src="https://mighty.tools/mockmind-api/content/human/7.jpg" alt="Image Description" />
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2.5 space-y-3">
                  <p className="text-sm text-gray-800">
                    You can ask questions like:
                  </p>
                </div>
              </li>
              <li className="flex ms-auto gap-x-2 sm:gap-x-2">
                <div className="grow text-end space-y-3">
                  <div className="inline-block bg-blue-600 rounded-2xl px-4 py-2.5 shadow-sm">
                    <p className="text-sm text-white">
                      Hawllo?
                    </p>
                  </div>
                </div>
                <span className="flex-shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full bg-gray-600">
                  <span className="text-sm font-medium text-white leading-none">AZ</span>
                </span>
              </li>
              <li className="max-w-lg flex gap-x-2 sm:gap-x-2 me-11">
                <img className="inline-block h-7 w-7 rounded-full" src="https://mighty.tools/mockmind-api/content/human/7.jpg" alt="Image Description" />
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2.5 space-y-3">
                  <p className="text-sm text-gray-800">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur maxime doloribus at obcaecati incidunt inventore assumenda temporibus ducimus adipisci. Neque.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <div className="container mx-auto max-w-2xl px-6 py-4">
            <form>
              <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Type your message</label>
              <div className="relative">
                <input type="text" id="message" className="block w-full p-4 ps-6 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Type your message" required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
