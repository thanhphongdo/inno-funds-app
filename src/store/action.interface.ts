export interface ChangeMessageFn {
    (message: string): Promise<void>;
}