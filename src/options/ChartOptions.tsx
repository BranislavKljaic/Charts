const aprChartOptions = {
  plugins: {
    legend: {
      labels: {
        color: "#fff",
        boxWidth: 0,
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: "#fff",
        callback: (value: any) => {
          return `${value}%`;
        },
      },
    },
    x: {
      ticks: {
        color: "#fff",
      },
    },
  },
};

const tvlChartOptions = {
  plugins: {
    legend: {
      labels: {
        color: "#fff",
        boxWidth: 0,
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: "#fff",
        callback: (value: any) => {
          return `${value / 1000000}M`;
        },
      },
    },
    x: {
      ticks: {
        color: "#fff",
      },
    },
  },
};

export { aprChartOptions, tvlChartOptions };
