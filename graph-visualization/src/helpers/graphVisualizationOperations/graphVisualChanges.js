export async function changeEdge(from, to, color, self) {
    let oldEdges = self.state.edges.slice();
    const index = oldEdges.findIndex(item =>
        item.from === from && item.to === to
    );
    oldEdges.splice(index, 1);
    oldEdges.push({
            from: from,
            to: to,
            color: color,
            width: 3
        }
    )
    await self.setState({
        edges: oldEdges,
    });
}

export async function colorPseudocodeLine(step, self, mainProcedure = true) {
    if (mainProcedure) {
        await self.setState({mainProcedureStep: step});
        return;
    }
    await self.setState({subProcedureStep: step});
}

