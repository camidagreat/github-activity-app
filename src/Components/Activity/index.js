import React from 'react'
import { ActivityWeek } from './ActivityWeek'

export const Activity = ({ activity }) => {
  const fakeActivity = [
    {
      "total": 11,
      "week": 1598140800,
      "days": [
        0,
        0,
        0,
        3,
        3,
        3,
        2
      ]
    },
    {
      "total": 35,
      "week": 1598745600,
      "days": [
        0,
        1,
        2,
        5,
        10,
        10,
        7
      ]
    },
    {
      "total": 22,
      "week": 1599350400,
      "days": [
        6,
        5,
        0,
        3,
        3,
        5,
        0
      ]
    },
    {
      "total": 10,
      "week": 1599955200,
      "days": [
        7,
        3,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "total": 3,
      "week": 1600560000,
      "days": [
        2,
        0,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "total": 2,
      "week": 1601164800,
      "days": [
        0,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "total": 23,
      "week": 1601769600,
      "days": [
        2,
        1,
        3,
        6,
        2,
        9,
        0
      ]
    },
    {
      "total": 87,
      "week": 1602374400,
      "days": [
        0,
        7,
        3,
        9,
        10,
        33,
        25
      ]
    },
    {
      "total": 55,
      "week": 1602979200,
      "days": [
        8,
        10,
        15,
        14,
        3,
        5,
        0
      ]
    },
    {
      "total": 28,
      "week": 1603584000,
      "days": [
        7,
        6,
        5,
        1,
        3,
        3,
        3
      ]
    },
    {
      "total": 25,
      "week": 1604188800,
      "days": [
        1,
        0,
        0,
        4,
        3,
        14,
        3
      ]
    },
    {
      "total": 37,
      "week": 1604793600,
      "days": [
        0,
        6,
        3,
        12,
        3,
        13,
        0
      ]
    },
    {
      "total": 27,
      "week": 1605398400,
      "days": [
        3,
        13,
        5,
        3,
        3,
        0,
        0
      ]
    },
    {
      "total": 6,
      "week": 1606003200,
      "days": [
        0,
        0,
        0,
        0,
        3,
        3,
        0
      ]
    },
    {
      "total": 3,
      "week": 1606608000,
      "days": [
        1,
        1,
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "total": 4,
      "week": 1607212800,
      "days": [
        0,
        0,
        0,
        0,
        1,
        3,
        0
      ]
    },
    {
      "total": 2,
      "week": 1607817600,
      "days": [
        0,
        0,
        1,
        0,
        0,
        1,
        0
      ]
    },
    {
      "total": 5,
      "week": 1608422400,
      "days": [
        1,
        2,
        1,
        0,
        0,
        1,
        0
      ]
    },
    {
      "total": 3,
      "week": 1609027200,
      "days": [
        2,
        0,
        0,
        0,
        0,
        1,
        0
      ]
    },
    {
      "total": 2,
      "week": 1609632000,
      "days": [
        0,
        0,
        0,
        2,
        0,
        0,
        0
      ]
    },
    {
      "total": 8,
      "week": 1610236800,
      "days": [
        0,
        2,
        0,
        2,
        0,
        2,
        2
      ]
    },
    {
      "total": 0,
      "week": 1610841600,
      "days": [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "total": 28,
      "week": 1611446400,
      "days": [
        0,
        0,
        4,
        0,
        0,
        20,
        4
      ]
    },
    {
      "total": 2,
      "week": 1612051200,
      "days": [
        0,
        0,
        0,
        0,
        0,
        2,
        0
      ]
    },
    {
      "total": 24,
      "week": 1612656000,
      "days": [
        20,
        0,
        2,
        2,
        0,
        0,
        0
      ]
    },
    {
      "total": 6,
      "week": 1613260800,
      "days": [
        2,
        0,
        0,
        0,
        2,
        2,
        0
      ]
    },
    {
      "total": 3,
      "week": 1613865600,
      "days": [
        0,
        0,
        0,
        0,
        0,
        1,
        2
      ]
    },
    {
      "total": 4,
      "week": 1614470400,
      "days": [
        0,
        0,
        0,
        0,
        0,
        2,
        2
      ]
    },
    {
      "total": 2,
      "week": 1615075200,
      "days": [
        0,
        0,
        0,
        0,
        0,
        2,
        0
      ]
    },
    {
      "total": 10,
      "week": 1615680000,
      "days": [
        0,
        0,
        2,
        6,
        0,
        2,
        0
      ]
    },
    {
      "total": 4,
      "week": 1616284800,
      "days": [
        0,
        4,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "total": 52,
      "week": 1616889600,
      "days": [
        0,
        0,
        4,
        2,
        0,
        40,
        6
      ]
    },
    {
      "total": 24,
      "week": 1617494400,
      "days": [
        8,
        8,
        4,
        0,
        2,
        0,
        2
      ]
    },
    {
      "total": 0,
      "week": 1618099200,
      "days": [
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "total": 26,
      "week": 1618704000,
      "days": [
        0,
        0,
        10,
        0,
        2,
        14,
        0
      ]
    },
    {
      "total": 28,
      "week": 1619308800,
      "days": [
        0,
        0,
        0,
        4,
        2,
        22,
        0
      ]
    },
    {
      "total": 40,
      "week": 1619913600,
      "days": [
        0,
        2,
        0,
        2,
        12,
        22,
        2
      ]
    },
    {
      "total": 36,
      "week": 1620518400,
      "days": [
        0,
        1,
        13,
        6,
        4,
        12,
        0
      ]
    },
    {
      "total": 13,
      "week": 1621123200,
      "days": [
        0,
        0,
        3,
        2,
        7,
        1,
        0
      ]
    },
    {
      "total": 21,
      "week": 1621728000,
      "days": [
        0,
        6,
        1,
        7,
        3,
        3,
        1
      ]
    },
    {
      "total": 28,
      "week": 1622332800,
      "days": [
        3,
        6,
        4,
        4,
        4,
        6,
        1
      ]
    },
    {
      "total": 16,
      "week": 1622937600,
      "days": [
        0,
        3,
        1,
        3,
        5,
        3,
        1
      ]
    },
    {
      "total": 24,
      "week": 1623542400,
      "days": [
        0,
        3,
        2,
        0,
        5,
        13,
        1
      ]
    },
    {
      "total": 23,
      "week": 1624147200,
      "days": [
        1,
        3,
        1,
        14,
        1,
        0,
        3
      ]
    },
    {
      "total": 11,
      "week": 1624752000,
      "days": [
        0,
        0,
        0,
        0,
        7,
        2,
        2
      ]
    },
    {
      "total": 6,
      "week": 1625356800,
      "days": [
        3,
        1,
        0,
        0,
        0,
        2,
        0
      ]
    },
    {
      "total": 4,
      "week": 1625961600,
      "days": [
        0,
        0,
        0,
        0,
        1,
        0,
        3
      ]
    },
    {
      "total": 10,
      "week": 1626566400,
      "days": [
        0,
        0,
        0,
        7,
        0,
        3,
        0
      ]
    },
    {
      "total": 8,
      "week": 1627171200,
      "days": [
        0,
        1,
        0,
        0,
        1,
        2,
        4
      ]
    },
    {
      "total": 3,
      "week": 1627776000,
      "days": [
        0,
        0,
        0,
        1,
        1,
        1,
        0
      ]
    },
    {
      "total": 2,
      "week": 1628380800,
      "days": [
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ]
    },
    {
      "total": 1,
      "week": 1628985600,
      "days": [
        0,
        1,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ]

  return (
    <div className='grid grid-flow-col auto-cols-max mt-4'>
      <div className='flex-1'>
        <p className='mt-4 mr-1 text-xs'>Mon</p>
        <p className='mt-4 mr-1 text-xs'>Wed</p>
        <p className='mt-4 mr-1 text-xs'>Fri</p>
      </div>
      {fakeActivity.map((week, index) => (<ActivityWeek key={week.week} weekData={week} prevWeek={fakeActivity[index - 1]?.week} />))}
    </div>
  )
}