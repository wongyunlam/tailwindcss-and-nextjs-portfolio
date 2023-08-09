import React from 'react';
import {
    AiOutlineGithub,
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineYoutube,
} from 'react-icons/ai';

function Footer() {
    return (
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-6xl pt-36">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
            <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
                <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
                    &#169; Yun Lam Wong
                </div>
                <div className="flex flex-row items-center justify-center space-x-2 mb-1">
                    <a
                        href="https://github.com/wongyunlam"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yun-lam-wong-45784a205/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineLinkedin
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
