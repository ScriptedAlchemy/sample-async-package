import dynamic from 'next/dynamic';
export var AsyncTitle = dynamic(function () {
  return import('./Title');
});