import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button/Button';
import Styles from './Controls.module.scss';

function Controls() {
  return (
    <div className={Styles.controls}>
      <Link to="/browse-past-sermons">
        <Button content="See more" variant="orange-1" type="button" />
      </Link>
    </div>
  );
}

export default Controls;
