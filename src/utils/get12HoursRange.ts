export default function () {
    const now = new Date();
    const from = now.toISOString();

    now.setHours(now.getHours() + 11);
    now.setMinutes(now.getMinutes() + 59);

    const to = now.toISOString();

    return [from, to];
}
