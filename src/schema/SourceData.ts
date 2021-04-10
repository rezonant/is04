import { SourceCore } from "./SourceCore";
/**
 * Describes a data Source
 */
export type SourceData = SourceCore & {
    
    /**
     * Format of the data coming from the Source as a URN
     */
    format : string,
    
    /**
     * Event type generated by this Source, if applicable
     */
    event_type? : string
};