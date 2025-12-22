import React from 'react';
export default function NovelCard({ novel, onClick }) { return <div onClick={() => onClick(novel)}>{novel.title}</div>; }
