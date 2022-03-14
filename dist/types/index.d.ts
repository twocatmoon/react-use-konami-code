export declare type UseKonamiCodeOptions = {
    /** Sequence of key strokes required to activate the callback  */
    sequence?: string[];
    /** If true, a sequence must be followed by the return/enter key before activating */
    requireReturn?: boolean;
};
/**
 * Calls a function when a sequence of key presses is detected.
 *
 * @param {() => void} callbackFn - Function to be called when a sequence is detected
 * @param {UseKonamiCodeOptions} [options] - Hook options
 *
 * @example
 * ```tsx
 * export default function () {
 *     const [ state, setState ] = useState('foo')
 *
 *     const options = {
 *         sequence: [ 'x', 'y', 'a', 'b' ],
 *         requireReturn: true
 *     }
 *     useKonamiCode(() => setState('bar'), options)
 *
 *     return (<div>{state}</div>)
 * })
 * ```
 */
export declare function useKonamiCode(callbackFn: () => void, options?: UseKonamiCodeOptions): void;
