
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


const navigation = [
  { name: 'Blog', href: '', current: false, verificar: false },
  { name: 'Portfolio', href: '', current: false, verificar: false },
  { name: 'About', href: '', current: false, verificar: false },
  { name: 'Contact', href: '', current: false, verificar: false },
  { name: 'More', href: '', current: true, verificar: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Navbar = () => {



  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full bg-white">

      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex pl-16 flex-shrink-0 items-center">
                <span className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">FLOWTRAIL UI</span>
              </div>

              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      !item.verificar ?
                        <a
                        key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-black text-white '  : 'text-black hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a> : <Menu as="div" key={item.name} className="relative ml-3">

                          <Menu.Button

                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-black text-black bg-opacity-10' : 'text-black hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined} >
                            {item.name}
                          </Menu.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-auto flex flex-col origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="flex">
                                <div className="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right">
                                  <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <Menu.Item>
                                        <a className="flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-black focus:text-black hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                                          <div className="bg-teal-500 text-white rounded-lg p-3">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="md:h-6 md:w-6 h-4 w-4"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                                          </div>
                                          <div className="ml-3">
                                            <p className="font-semibold">Analytics</p>
                                            <p className="text-sm">Take a look at your statistics</p>
                                          </div>
                                        </a>
                                      </Menu.Item>
                                      <Menu.Item>

                                        <a className="flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-black focus:text-black hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                                          <div className="bg-teal-500 text-white rounded-lg p-3">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="md:h-6 md:w-6 h-4 w-4"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                          </div>
                                          <div className="ml-3">
                                            <p className="font-semibold">Comments</p>
                                            <p className="text-sm">Check your latest comments</p>
                                          </div>
                                        </a>

                                      </Menu.Item>
                                      <Menu.Item>
                                        <a className="flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-black focus:text-black hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                          href="transferencias">
                                          <div className="bg-teal-500 text-white rounded-lg p-3">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="md:h-6 md:w-6 h-4 w-4"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                          </div>
                                          <div className="ml-3">
                                            <p className="font-semibold">Appearance</p>
                                            <p className="text-sm">Easy customization</p>
                                          </div>
                                        </a>
                                      </Menu.Item>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Menu.Items>

                          </Transition>
                        </Menu>

                    ))}

                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                !item.verificar?
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-black text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
                :<Menu as="div" key={item.name} className="relative ml-3">

                <Menu.Button

                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-black text-black bg-opacity-10' : 'text-black hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined} >
                  {item.name}
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div className="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right">
                    <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Menu.Item>
                          <a className="flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                            <div className="bg-teal-500 text-white rounded-lg p-3">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="md:h-6 md:w-6 h-4 w-4"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                            </div>
                            <div className="ml-3">
                              <p className="font-semibold">Appearance</p>
                              <p className="text-sm">Easy customization</p>
                            </div>
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a className="flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                            <div className="bg-teal-500 text-white rounded-lg p-3">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="md:h-6 md:w-6 h-4 w-4"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                            </div>
                            <div className="ml-3">
                              <p className="font-semibold">Comments</p>
                              <p className="text-sm">Check your latest comments</p>
                            </div>
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a className="flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                            <div className="bg-teal-500 text-white rounded-lg p-3">
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="md:h-6 md:w-6 h-4 w-4"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                            </div>
                            <div className="ml-3">
                              <p className="font-semibold">Analytics</p>
                              <p className="text-sm">Take a look at your statistics</p>
                            </div>
                          </a>
                        </Menu.Item>
                      </div>
                    </div>
                  </div>


                </Transition>
              </Menu>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  )
}


export default Navbar;
