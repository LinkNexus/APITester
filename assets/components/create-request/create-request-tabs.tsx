import { QueryParameterSection } from "@/components/create-request/query-parameter-section";
import { BodySection } from "@/components/create-request/body-section";
import { HeadersSection } from "@/components/create-request/headers-section";
import { useRef } from "react";
import type Request from "#models/Request";

export function CreateRequestTabs({ request, requestType }: { request: Request | null, requestType: "http" | "event-source" }) {
    const bodySectionRef = useRef<HTMLDivElement | null>(null);

    return (
        <div data-tabs-group="create-request">
            <div data-tabs-triggers={true}>
                <div data-tab-section="params-section">Params</div>
                <div className={requestType === "event-source" ? "hidden" : "block"} ref={bodySectionRef} data-tab-section="body-section">Body</div>
                <div data-tab-section="headers-section">Header</div>
            </div>

            <div data-tabs-container={true}>
                <QueryParameterSection url={request?.url} />
                <BodySection request={request} />
                <HeadersSection request={request} />
            </div>
        </div>
    )
}