"use client";
import HomeLayout from "@/assests/layout";
import React from "react";
import { Herobar } from "./Herobar";
import ProductCarousel from "./products";
import Container from "@/ui";
import Filter from "./filter";
import Banner from "./Banner";

export default function HomeComponent({ data }) {
  return (
    <HomeLayout>
      <Herobar data={data?.slice(0, 3)} />
      <Container>
        <ProductCarousel products={data?.slice(0, 6)} />
      </Container>{" "}
      <Banner />
      <Filter products={data?.slice(0, 18)} />
    </HomeLayout>
  );
}
