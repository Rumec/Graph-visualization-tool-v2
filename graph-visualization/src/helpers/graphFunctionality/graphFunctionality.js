export async function generateGraph(self) {
    let actualAngle = 0;
    let nodesArr = [];

    await self.setState({
        vertexCount: self.state.vertexCountInput,
        nodes: [],
    });

    for (let i = 1; i <= self.state.vertexCount; ++i) {
        nodesArr.push({
            id: i,
            level: 1,
            inDegree: 0,
            label: i.toString(),
            title: i.toString(),
            color: '#1AB399',
            x: self.RADIUS * Math.sin(actualAngle),
            y: self.RADIUS * Math.cos(actualAngle)
        });
        actualAngle += (2 * Math.PI) / self.state.vertexCount;
    }
    await self.setState({
        mainProcedureStep: 0,
        nodes: nodesArr,
        edges: [],
        from: 0,
        to: 0,
    });

    // For demo runs
    // if (self.state.sequenceToAdd.length !== 10) {
    //     this.setState({
    //         sequenceToAdd: []
    //     })
    // }
}

export async function addEdge(self) {
    const from = parseInt(self.state.from);
    const to = parseInt(self.state.to);

    if (from === to || from <= 0 || to <= 0 || from > self.state.numberOfVertices ||
        to > self.state.numberOfVertices) {
        window.alert('You can\'t create loop or add edge between vertices that do not exist.');
        return;
    } else if (self.state.edges.some(edge => edge.from === from && edge.to === to)) {
        window.alert('Edge already exists.');
        return;
    }

    const oldEdges = self.state.edges.slice();
    oldEdges.push({
        from: from,
        to: to,
        color: "black",
        width: 2,
    });

    await self.setState({
        edges: oldEdges,
    });
}