describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('it should handle no server', function () {
    serverName.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('It should add all servers to table', function () {
    allServers = { server1: { serverName: "Alice" }, server2: { serverName: "Charlie" }, server3: { serverName: "Bill" } };
    updateServerTable();
    expect(Object.keys(allServers).length).toEqual(3);
    expect(Object.keys(document.querySelectorAll('#serverTable tbody tr')).length).toEqual(3);
  });

  afterEach(function () {
    allServers = {};
    serverId = 0;
    updateServerTable();
  });
});