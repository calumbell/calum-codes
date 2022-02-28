import * as React from 'react';
import { Layout } from './src/components/';

export const wrapPageElement = ({ element }) => {
  return (
    <Layout>
      { element }
    </Layout>
  )
}