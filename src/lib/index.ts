import { useEffect, useRef } from 'react'

export type UseKonamiCodeOptions = {
  /** Sequence of key strokes required to activate the callback  */
  sequence?: string[]
  /** If true, a sequence must be followed by the return/enter key before activating */
  requireReturn?: boolean
}

const defaultSequence = [
    'ArrowUp', 
    'ArrowUp', 
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
]

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

export function useKonamiCode (callbackFn: () => void, options?: UseKonamiCodeOptions) {
    const targetSequence = (
        options?.sequence 
            ? options.sequence
            : defaultSequence
        ).map((key) => key.toLowerCase())
    if (options?.requireReturn || false) targetSequence.push('enter')

    const sequenceRef = useRef<string[]>([])

    const reset = () => {
        sequenceRef.current = []
    }

    const append = (key: string) => {
        sequenceRef.current.push(key)
    }

    const test = () => {
        return sequenceRef.current.join(',') === targetSequence.join(',')
    }
    
    useEffect(() => {
        const keyboardHandler = ({ key }: KeyboardEvent) => {
            key = key.toLowerCase()

            if (targetSequence[sequenceRef.current.length] === key) {
                append(key)
                if (test()) callbackFn()
            } else {
                reset()
            }
        }
        document.body.addEventListener('keyup', keyboardHandler)

        return () => {
            document.body.removeEventListener('keyup', keyboardHandler)
        }
    })
}
