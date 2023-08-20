import { useState } from "react";

export interface ClassLike<T> {
    get: ReturnType<() => () => T>,
    set: ReturnType<(newValue: T) => React.Dispatch<T>>,
}

export function makeState<T>(defaultValue: any): ClassLike<T> {
    const [value, set] = useState(defaultValue);
    return {
        get: () => value,
        set
    }
}
