import React from 'react';

import './App.css';

import { Reports } from "./components/reports/Reports";
import { Report } from "./components/report/Report";

function App() {

  const data = [
    {
      week: "Week one",
      reports: [
        {
          names: "Dominique Nsengimana",
          reviews: {
            quality: {
              name: 'Quality',
              rating: 2,
              review: 'Satisfied',
              reviewMessage: 'Ouilds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.'
            },
            quantity: {
              name: 'Quantity',
              rating: 2,
              review: 'Satisfied',
              reviewMessage: 'Suilds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.'
            },
            initiative: {
              name: 'Initiative',
              rating: 2,
              review: 'Satisfied',
              reviewMessage: 'Tuilds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.'
            },
            communication: {
              name: 'Communication',
              rating: 2,
              review: 'Satisfied',
              reviewMessage: 'Xuilds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.'
            },
            professionalism: {
              name: 'Professionalism',
              rating: 2,
              review: 'Satisfied',
              reviewMessage: 'Yuilds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.'
            },
            integration: {
              name: 'Integration',
              rating: 2,
              review: 'Satisfied',
              reviewMessage: 'Guilds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.'
            }
          }
        },
        {
          names: "Dominique Nsengimana",
          reviews: {
            quality: {
              name: 'Quality',
              rating: 2,
              review: 'Satisfied',
              reviewMessage: 'Ouilds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.'
            },
            quantity: {
              name: 'Quantity',
              rating: 2,
              review: 'Satisfied',
              reviewMessage: 'Suilds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.'
            },
            initiative: {
              name: 'Initiative',
              rating: 2,
              review: 'Satisfied',
              reviewMessage: 'Tuilds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.'
            },
            communication: {
              name: 'Communication',
              rating: 2,
              review: 'Satisfied',
              reviewMessage: 'Xuilds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.'
            },
            professionalism: {
              name: 'Professionalism',
              rating: 2,
              review: 'Satisfied',
              reviewMessage: 'Yuilds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.'
            },
            integration: {
              name: 'Integration',
              rating: 2,
              review: 'Satisfied',
              reviewMessage: 'Guilds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.'
            }
          }
        }
      ]
    }];

  return (
    <div className="container">
      Builds the app for production to the build folder.
        It correctly bundles React in production mode and optimizes the build for the best performance.
      <Reports data={data[0]} />
      {/* <Report data={reports[0].reviews}/> */}
    </div>
  );
}

export default App;
