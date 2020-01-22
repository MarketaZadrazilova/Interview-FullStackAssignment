 const services = [
  {
    service: "Service I",
    ip: "10.25.01.01",
    servers: [
      { name: "lin-pra-891", status: "running" },
      { name: "lin-pra-128", status: "error" },
      { name: "lin-pra-738", status: "running" },
      { name: "lin-pra-2903", status: "error" }
    ]
  },
  {
    service: "Service C",
    ip: "10.24.01.21",
    servers: [
      { name: "lin-pra-v78", status: "running" },
      { name: "lin-pra-v79", status: "error" },
      { name: "lin-pra-v76", status: "running" },
      { name: "lin-pra-v77", status: "error" }
    ]
  },
  {
    service: "Service D",
    ip: "10.23.18.10",
    servers: [
      { name: "lin-pra-17", status: "running" },
      { name: "lin-pra-19", status: "error" },
      { name: "lin-pra-18", status: "running" }
    ]
  },
  {
    service: "Service A",
    ip: "10.23.19.01",
    servers: [
      { name: "lin-pra-187", status: "running" },
      { name: "lin-pra-189", status: "error" },
      { name: "lin-pra-197", status: "running" }
    ]
  },
  {
    service: "Service F",
    ip: "10.20.18.10",
    servers: [
      { name: "lin-pra-v829a9", status: "running" },
      { name: "lin-pra-v829b1", status: "error" },
      { name: "lin-pra-v829b0", status: "running" }
    ]
  },
  {
    service: "Service H",
    ip: "10.23.18.23",
    servers: [
      { name: "win-br-89187", status: "running" },
      { name: "win-br-89189", status: "error" },
      { name: "win-br-89190", status: "running" },
      { name: "win-br-89191", status: "running" },
      { name: "win-br-89192", status: "running" },
      { name: "win-br-89193", status: "running" }
    ]
  },
  {
    service: "Service B",
    ip: "10.23.17.01",
    servers: [
      { name: "win-pra-187", status: "running" },
      { name: "win-pra-189", status: "error" }
    ]
  },
  {
    service: "Service E",
    ip: "10.13.09.01",
    servers: [
      { name: "win-pea-18722", status: "error" },
      { name: "win-pea-18924", status: "error" },
      { name: "lin-pea-18928", status: "error" }
    ]
  }
];

export default services;