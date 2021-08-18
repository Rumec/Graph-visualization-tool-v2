import {changeEdge} from "../graphVisualizationOperations/graphVisualChanges";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function DFS_recursion(edges, actual, visited, self) {
    visited.add(actual);
    for (let i = 0; i < edges.length; ++i) {
        if (edges[i].from === actual && !visited.has(edges[i].to)) {
            await changeEdge(actual, edges[i].to, 'red', self);
            await sleep(1500);
            await DFS_recursion(edges, edges[i].to, visited, self);
        }
    }
}

export async function DFS(edges, self) {
    let visited = new Set();
    await DFS_recursion(edges, self.state.startingVertex, visited, self);
}