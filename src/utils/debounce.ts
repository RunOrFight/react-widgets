let timerId = 0;

export default function (callback: (...args: any) => any, delay: number) {
    return () => {
        clearTimeout(timerId);
        timerId = setTimeout(callback, delay);
    };
}
