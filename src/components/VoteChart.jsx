import { Bar } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function VoteChart({ voteStats }) {
  const total = Object.values(voteStats).reduce((a, b) => Number(a) + Number(b), 0);
  
  const options = {
    indexAxis: 'y',
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: '#FFFFFF'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      y: {
        ticks: {
          color: '#FFFFFF'
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        callbacks: {
          label: (context) => {
            const value = context.raw;
            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
            return `${value} voturi (${percentage}%)`;
          }
        }
      }
    }
  };

  const data = {
    labels: [
      'CĂLIN GEORGESCU',
      'ELENA-VALERICA LASCONI',
      'NU VOTEZ'
    ],
    datasets: [
      {
        data: [
          voteStats.A || 0,
          voteStats.B || 0,
          voteStats.C || 0
        ],
        backgroundColor: [
          'rgba(231, 76, 60, 0.8)',
          'rgba(52, 152, 219, 0.8)',
          'rgba(149, 165, 166, 0.8)'
        ],
        borderColor: [
          'rgba(231, 76, 60, 1)',
          'rgba(52, 152, 219, 1)',
          'rgba(149, 165, 166, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <Box 
      w="100%" 
      maxW="800px" 
      h="300px" 
      mx="auto" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
    >
      <Bar options={options} data={data} />
    </Box>
  );
}

export default VoteChart;