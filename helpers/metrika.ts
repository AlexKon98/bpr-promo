export default function triggerMetrika(action: string): void {
    // @ts-ignore metrika script
    if (!window.ym) return;
    // @ts-ignore metrika script
    window.ym(96598334, 'reachGoal', action);
    // console.log(action);
}
