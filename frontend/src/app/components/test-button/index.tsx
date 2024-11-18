'use client'

import { useQuery } from "@apollo/client";
import { GET_TEST_QUERY } from "./test-button-query";

export default function TestButton() {
    const { data } = useQuery(GET_TEST_QUERY);

    return (
        <button onClick={() => console.log(data)}>
            test query
        </button>
    )
}