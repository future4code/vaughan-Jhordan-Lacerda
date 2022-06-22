import { Walk } from "./walk";

export interface IWalkData {
    getIndex(offset: number): Promise<Walk[]>
}