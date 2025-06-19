'use client';

import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Clock, Car, Bus, Train, Info } from 'lucide-react';
import GoogleMap from '@/components/location/GoogleMap';
import AddressCopy from '@/components/location/AddressCopy';
import styles from './location.module.css';


export default function LocationPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.sub04_01}>
      {/* contents start */}
      <div className={styles.contents}>
        <div className={styles.contents_title}>
          <div className={styles.inner}>
            <h2 className={isVisible ? styles.fadeUp : ''}>오시는 길</h2>
          </div>
        </div>

        {/* contents_detail start */}
        <div className={styles.contents_detail}>
          <div className={styles.inner}>
            <div className={styles.map}>
              <div className={`${styles.image_show_wrap} ${isVisible ? styles.show_img01 : ''}`}>
                <div className={`${styles.image_show_wrap2} ${isVisible ? styles.show_img02 : ''}`}>
                  {/* Map Section */}
                  <div className={styles.mapContainer}>
                    <GoogleMap />
                  </div>

                  {/* Contact table */}
                  <table className={styles.chart}>
                    <tbody>
                      <tr>
                        <th>주소</th>
                        <td>의정부시 고산동 996-3 고산한강 듀클래스 B동 923호</td>
                      </tr>
                      <tr>
                        <th>전화번호</th>
                        <td>010-9999-3436 / 010-9999-3436</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contents_detail end */}
      </div>
      {/* contents end */}
    </section>
  )
}