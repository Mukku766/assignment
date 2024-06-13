
"use client"; 

import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>Ecommerce</h4>
          <ul>
            <li><Link href="/who-we-are">Who We Are</Link></li>
            <li><Link href="/join-our-team">Join Our Team</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy">We Respect Your Privacy</Link></li>
            <li><Link href="/fees-payments">Fees & Payments</Link></li>
            <li><Link href="/returns-refunds">Returns & Refunds Policy</Link></li>
            <li><Link href="/promotions-terms">Promotions Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Help</h4>
          <ul>
            <li><Link href="/track-order">Track Your Order</Link></li>
            <li><Link href="/faq">Frequently Asked Questions</Link></li>
            <li><Link href="/returns">Returns</Link></li>
            <li><Link href="/cancellations">Cancellations</Link></li>
            <li><Link href="/payments">Payments</Link></li>
            <li><Link href="/customer-care">Customer Care</Link></li>
            <li><Link href="/redeem-coupon">How Do I Redeem My Coupon</Link></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Shop by</h4>
          <ul>
            <li><Link href="/men">Men</Link></li>
            <li><Link href="/women">Women</Link></li>
            <li><Link href="/kids">Kids</Link></li>
            <li><Link href="/indie">Indie</Link></li>
            <li><Link href="/stores">Stores</Link></li>
            <li><Link href="/new-arrivals">New Arrivals</Link></li>
            <li><Link href="/brand-directory">Brand Directory</Link></li>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/collections">Collections</Link></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Follow us</h4>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/ajio" target="_blank" rel="noopener noreferrer">Instagram - AJIOlife</a></li>
            <li><a href="https://www.instagram.com/ajioluxe" target="_blank" rel="noopener noreferrer">Instagram - AJIO LUXE</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
