import { Avatar, Button, Checkbox, Tabs, TabList, TabPanels, Tab, TabPanel, IconButton } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import chroma from 'chroma-js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


function App() {
  return (
    <>
      <div className='flex items-center justify-between h-[60px] p-4 border-b-[1px] shadow'>
        <div>
          REACT CHART
        </div>
        

        <div className='cursor-pointer'>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </div>
      </div>

      <main className='flex justify-between'>
        <div className='w-[350px] border-r-[1px] h-[calc(100vh-60px)] py-4 s  hadow'>
          <div className='text-[rgb(90, 104, 114)] text-[14px] uppercase text-center border-b-[1px] pb-4'>
            CONTROL CENTER
          </div>
          <div className='p-4'>
            <div className='text-[rgb(21, 41, 53)] font-bold'>Selected Variables / Sections</div>
          </div>

          <div className='px-4 h-[calc(100vh-225px)] overflow-auto pb-4'>
            <div className='flex flex-col cursor-not-allowed'>
              {Array.from(Array(10).keys()).map(item => (
                <Checkbox 
                  key={item} 
                  value='kakashi' 
                  defaultChecked
                  className='px-1 text-white pointer-events-none'
                  style={{
                    backgroundColor: chroma.random().hex(),
                  }}
                >
                  egg
                </Checkbox>
              ))}
            </div>
          </div>

          <div className='border-t-[1px] pt-2 text-right px-4'>
            <Button colorScheme='teal' variant='outline'>
              Apply
            </Button>
          </div>
        </div>

        <div className='grow'>
          <Tabs width="100%">
            <div className='flex items-center justify-between relative'>
              <TabList className='grow h-[54px]'>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
              </TabList>
              <div className='absolute right-0'>
                <IconButton
                  variant='outline'
                  className='border-0'
                  aria-label='Close'
                  icon={<SmallAddIcon />}
                />
              </div>
            </div>

            <TabPanels>
              <TabPanel>
                <div className='w-full flex justify-center'>
                  <div className='w-1/2'>
                    <Pie data={data} /> 
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='w-full flex justify-center'>
                  <div className='w-1/2'>
                    <Pie data={data} /> 
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='w-full flex justify-center'>
                  <div className='w-1/2'>
                    <Pie data={data} /> 
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>

         
        </div>

        <div className='w-[350px] border-l-[1px] h-[calc(100vh-60px)] py-4 s  hadow'>
          <div className='text-[rgb(90, 104, 114)] text-[14px] uppercase text-center border-b-[1px] pb-4 mb-2'>
            VARIABLES
          </div>

          <div className='px-4 h-[calc(100vh-125px)] overflow-auto'>
            <div className='flex flex-col'>
              {Array.from(Array(20).keys()).map(item => (
                <Checkbox 
                  key={item} 
                  value='egg' 
                  className='px-1'
                >
                  egg
                </Checkbox>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>

  )
}

export default App
