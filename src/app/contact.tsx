import React from 'react'

const Contact = () => {
    return (

        <section
            className="relative z-10 overflow-hidden bg-[#111928] dark:bg-dark py-20 lg:py-[120px]"
        >
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4 lg:justify-between">
                    <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                        <div className="mb-12 max-w-[570px] lg:mb-0">
                            <span className="block mb-4 text-base font-semibold text-primary text-blue-700">
                                Contact Us
                            </span>
                            <h2
                                className="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
                            >
                                GET IN TOUCH WITH US
                            </h2>
                            <p
                                className="text-base leading-relaxed text-body-color text-gray-300 mb-9"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                adiqua minim veniam quis nostrud exercitation ullamco
                            </p>
                            <div className="mb-8 flex w-full max-w-[370px]">
                                <div
                                    className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#0f97ff" d="M272.5 5.7c9-7.6 22.1-7.6 31.1 0l264 224c10.1 8.6 11.4 23.7 2.8 33.8s-23.7 11.3-33.8 2.8L512 245.5V432c0 44.2-35.8 80-80 80H144c-44.2 0-80-35.8-80-80V245.5L39.5 266.3c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l264-224zM288 55.5L112 204.8V432c0 17.7 14.3 32 32 32h48V312c0-22.1 17.9-40 40-40H344c22.1 0 40 17.9 40 40V464h48c17.7 0 32-14.3 32-32V204.8L288 55.5zM240 464h96V320H240V464z" /></svg>
                                </div>
                                <div className="w-full">
                                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                        Our Location
                                    </h4>
                                    <p className="text-base text-body-color text-gray-300">
                                        99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                                    </p>
                                </div>
                            </div>
                            <div className="mb-8 flex w-full max-w-[370px]">
                                <div
                                    className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" /></svg>
                                </div>
                                <div className="w-full">
                                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                        Phone Number
                                    </h4>
                                    <p className="text-base text-body-color text-gray-300">
                                        (+62)81 414 257 9980
                                    </p>
                                </div>
                            </div>
                            <div className="mb-8 flex w-full max-w-[370px]">
                                <div
                                    className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                                </div>
                                <div className="w-full">
                                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                        Email Address
                                    </h4>
                                    <p className="text-base text-body-color text-gray-300">
                                        info@yourdomain.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div
                            className="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12"
                        >
                            <form>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Your Phone"
                                        className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                                    />
                                </div>
                                <div className="mb-6">
                                    <textarea
                                        rows={parseInt("6")}
                                        placeholder="Your Message"
                                        className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full p-3 text-white transition border rounded border-primary bg-primary hover:bg-opacity-90"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                            <div>
                                <span className="absolute -top-10 -right-9 z-[-1]">
                                    <svg
                                        width="100"
                                        height="100"
                                        viewBox="0 0 100 100"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                                <span className="absolute -right-10 top-[90px] z-[-1]">
                                    <svg
                                        width="34"
                                        height="134"
                                        viewBox="0 0 34 134"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="31.9993"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 1.66665)"
                                            fill="#13C296"
                                        />
                                    </svg>
                                </span>
                                <span className="absolute -left-7 -bottom-7 z-[-1]">
                                    <svg
                                        width="107"
                                        height="134"
                                        viewBox="0 0 107 134"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="104.999"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 104.999 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 104.999 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 104.999 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 104.999 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 104.999 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 104.999 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 104.999 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 104.999 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 104.999 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="104.999"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 104.999 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="90.3333"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 90.3333 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="75.6654"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 75.6654 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="31.9993"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 31.9993 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="60.9993"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 60.9993 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="17.3333"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 17.3333 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="132"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 132)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="117.333"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 117.333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="102.667"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 102.667)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="88"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 88)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="73.3333"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 73.3333)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="45"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 45)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="16"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 16)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="59"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 59)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="30.6666"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 30.6666)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="46.3333"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 46.3333 1.66665)"
                                            fill="#13C296"
                                        />
                                        <circle
                                            cx="2.66536"
                                            cy="1.66665"
                                            r="1.66667"
                                            transform="rotate(180 2.66536 1.66665)"
                                            fill="#13C296"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact