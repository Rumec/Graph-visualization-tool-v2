import {changeEdge, colorPseudocodeLine} from "../graphVisualizationOperations/graphVisualChanges";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function DFSTraversalRecursion(edges, actual, visited, self) {
    visited.add(actual);
    for (let i = 0; i < edges.length; ++i) {
        if (edges[i].from === actual && !visited.has(edges[i].to)) {
            await changeEdge(actual, edges[i].to, 'red', self);
            await sleep(self.state.stepDuration);
            await DFSTraversalRecursion(edges, edges[i].to, visited, self);
        }
    }
}

export async function DFSTraversal(edges, self) {
    let visited = new Set();

    await colorPseudocodeLine(1, self);
    await sleep(self.state.stepDuration);
    await colorPseudocodeLine(2, self);

    await DFSTraversalRecursion(edges, self.state.startingVertex, visited, self);

    await colorPseudocodeLine(0, self);
}