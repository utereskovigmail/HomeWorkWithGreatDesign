import {useState} from "react";


function App() {

    const [open, setOepn] = useState(false);
    return (
        <div className="w-full h-screen p-4">
           <button title="Open More" className="bg-blue-600 rounded rounded-xl px-6 py-2 text-white hover:bg-blue-700"
                   onClick={() => open ? setOepn(false) : setOepn(true)}>
           My Favourite movie</button>

            {
                open &&
                <div className="flex flex-col gap-1 p-4 my-4 rounded rounded-xl border border-gray-200 shadow-md w-[500px]">
                    <p><span className="font-semibold">Назва фільму:</span> Inception</p>
                    <p><span className="font-semibold">ПІБ режисера:</span> Крістофер Нолан</p>
                    <p><span className="font-semibold">Рік випуску:</span> 2010</p>
                    <p><span className="font-semibold">Кіностудія:</span> Warner Bros. Pictures, Legendary Pictures, Syncopy</p>

                    <p><span className="font-semibold">Жанр:</span> наукова фантастика, трилер</p>
                    <p className="text-gray-600 text-sm">
                        Коротко: злодій, що викрадає секрети через сни, отримує завдання зробити «занурення» і
                        вбудувати ідею в свідомість цілі.
                    </p>
                    
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81p+xe8cbnL._UF1000,1000_QL80_.jpg" alt=""/>
                    </div>

                    <div className="mt-2 flex gap-2">
                        <a
                            href="https://www.youtube.com/watch?v=YoHD9XEInc0"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline text-sm"
                        >
                            Трейлер
                        </a>
                        <a
                            href="https://www.imdb.com/title/tt1375666/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline text-sm"
                        >
                            IMDb
                        </a>
                    </div>
                </div>
            }

        </div>
    );
}

export default App;
