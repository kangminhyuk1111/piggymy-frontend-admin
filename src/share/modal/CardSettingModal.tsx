'use client';

import { TableProps as AntdTableProps } from 'antd/es/table/InternalTable';
import Image from 'next/image';
import React, { ReactNode, useState } from 'react';

import refreshIcon from '/public/img/Icon/refresh.svg';
import StatusBadge from '@/share/ui/badge/StatusBadge';
import WordBadge from '@/share/ui/badge/WordBadge';
import Button from '@/share/ui/button/Button';
import Table from '@/share/ui/table/Table';
import Title from '@/share/ui/title/Title';
import { cn } from '@/utils/cn';

export interface DataType {
  [key: string]: number | string | ReactNode;
}

interface CardSettingProps {
  onConfirm?: () => void;
  onCancel?: () => void;
}

function CardSettingModal({ onConfirm, onCancel }: CardSettingProps) {
  const [wordList] = useState([
    { id: 0, word: '관' },
    { id: 1, word: '치' },
    { id: 2, word: '금' },
    { id: 3, word: '융' },
  ]);

  const lorem =
    '정부가 재량적 정치운용을 통해서 민간 금융기관에 참여함으로써 금융시장의 인사와 자금배분에 직접 개입하는 형태.';

  const columns: AntdTableProps<DataType>['columns'] = [
    {
      title: '사용여부',
      dataIndex: 'isUsed',
      key: 'isUsed',
      align: 'center',
      width: 100,
    },
    {
      title: '용어카드',
      dataIndex: 'word',
      key: 'word',
      width: 200,
    },
    {
      title: '퀴즈카드',
      dataIndex: 'quiz',
      key: 'quiz',
      width: 300,
    },
  ];

  const dataSource: DataType[] = [
    {
      key: 1,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 2,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 3,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 4,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 5,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 6,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 7,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 8,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 9,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
    {
      key: 10,
      isUsed: <StatusBadge isActive></StatusBadge>,
      word: '관치금융',
      quiz: lorem,
    },
  ];

  return (
    <div
      className={cn(
        'flex w-[760px] flex-col items-start justify-center gap-5 text-center',
      )}
    >
      <Title>용어/퀴즈카드 설정</Title>
      <div className={'block w-full bg-warning'}>SEARCH UI</div>
      <div className={'flex flex-wrap items-center justify-start gap-3'}>
        <button>
          <Image src={refreshIcon} alt="feedbackIcon" width={20} height={20} />
        </button>
        {wordList.map((word) => (
          <WordBadge key={word.id} word={word.word} />
        ))}
      </div>

      <Table
        hasSelection
        columns={columns}
        dataSource={dataSource}
        scroll={{ y: 300 }}
      />
      {(onCancel || onConfirm) && (
        <div className={'flex w-full  justify-center gap-2'}>
          {onCancel && (
            <Button color={'white'} size={'large'} onClick={onCancel}>
              취소
            </Button>
          )}
          {onConfirm && (
            <Button color={'blue'} size={'large'} onClick={onConfirm}>
              확인
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default CardSettingModal;
