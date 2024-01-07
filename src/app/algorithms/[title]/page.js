import { algorithems } from '@/app/algorithms/data'
import Algorithm from './Algorithm'

export let metadata = {
    title: "Majid's Algorithms",
    description: "Majid's Algorithms",
}

export default function AlgorithmPage({ params }) {
    metadata.title = algorithems[params.title].title;
    metadata.description = algorithems[params.title].title;

    return (
        <Algorithm params={params} />
            
    )
}