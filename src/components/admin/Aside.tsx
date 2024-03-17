export const Aside = () => {
    return(
        <aside id="default-sidebar" className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="/admin/cyberware" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="flex-1 ms-3 whitespace-nowrap">Cyberware</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/choombas" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="flex-1 ms-3 whitespace-nowrap">Choombas</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/distritos" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="flex-1 ms-3 whitespace-nowrap">Distritos</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/fixers" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="flex-1 ms-3 whitespace-nowrap">Fixers</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/gangs" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="flex-1 ms-3 whitespace-nowrap">Gangs</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/corpos" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="flex-1 ms-3 whitespace-nowrap">Corpos</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>        
    )
}


