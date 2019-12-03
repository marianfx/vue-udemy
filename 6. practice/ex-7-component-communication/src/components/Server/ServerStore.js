export const serverStore = {
    state: {
        servers: ["Server 1", "Server 2", "Server 3", "Server 4"],
        selectedServer: null
    },
    selectServer(server) {
        this.state.selectedServer = server;
    },
}
