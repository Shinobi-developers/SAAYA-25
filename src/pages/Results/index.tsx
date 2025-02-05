import React, { useState, useEffect } from "react";
import { Input, Select, Button, Card, Row, Col, Spin } from "antd";
import axios from "axios";
import { FaMedal } from "react-icons/fa";

const { Option } = Select;

interface Result {
  eventName: string;
  first: { name: string; sem: string; squad: string };
  second: { name: string; sem: string; squad: string };
  third: { name: string; sem: string; squad: string };
}

const ResultsPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [filter, setFilter] = useState({ type: "", squad: "", semester: "" });
  const [results, setResults] = useState<Result[]>([]);

  

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://saaya-25-backend.onrender.com/event/all", {
          params: {
            eventName: search,
            eventType: filter.type,
            squad: filter.squad,
            sem: filter.semester,
          },
        });
        setIsLoading(false);
        setResults(response.data);
        setNoResult(response.data.length === 0);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setNoResult(true);
      }
    };
    fetchResults();
  }, [search, filter]);

  const getSquad = (code: string) =>{
    switch (code) {
      case "CSE": return "Slytherin";
      case "CE_AD": return "Gryffindor";
      case "EEE_ECE_ME": return "Hufflepuff";
      case "MCA_MTECH": return "Ravenclaw";
      default: return "None";
    }
  } 

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Event Results</h1>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex gap-3.5 max-md:w-full">
            <Input
              placeholder="Search event name..."
              className="border-gray-300 shadow-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="primary">Search</Button>
          </div>
          <Select className="w-40" placeholder="All Types" onChange={(value) => setFilter({ ...filter, type: value })}>
            <Option value="">All Types</Option>
            <Option value="ON_STAGE">On-Stage</Option>
            <Option value="OFF_STAGE">Off-Stage</Option>
            <Option value="SECOND_STAGE">Second-Stage</Option>
          </Select>
          <Select className="w-40" placeholder="All Squads" onChange={(value) => setFilter({ ...filter, squad: value })}>
            <Option value="">All Squads</Option>
            <Option value="CSE">Slytherin</Option>
            <Option value="CE_AD">Gryffindor</Option>
            <Option value="EEE_ECE_ME">Hufflepuff</Option>
            <Option value="MCA_MTECH">Ravenclaw</Option>
          </Select>
          <Select className="w-40" placeholder="All Semester" onChange={(value) => setFilter({ ...filter, semester: value })}>
            <Option value="">All Semester</Option>
            <Option value="S2">S2</Option>
            <Option value="S4">S4</Option>
            <Option value="S6">S6</Option>
            <Option value="S8">S8</Option>
          </Select>
        </div>

        {isLoading ? (
          <div className="flex w-full justify-center">
            <Spin size="large" />
          </div>
        ) : noResult ? (
          <div className="flex w-full justify-center">
            <Card className="shadow-lg border rounded-lg p-4 bg-gradient-to-br from-yellow-100 to-white">
              <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900 ">No Results Found</h2>
              <p className="text-center text-gray-600">Try adjusting your search or filters.</p>
            </Card>
          </div>
        ) : (
          <Row gutter={[16, 16]}>
            {results.map((result, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Card
                  title={<span className="text-xl md:text-2xl font-semibold text-gray-900 bg-amber-200 py-2 px-5 rounded-lg inline-block my-2">{result.eventName}</span>}
                  bordered={false}
                  className="shadow-lg border rounded-lg p-4 bg-gradient-to-br from-yellow-100 to-white hover:shadow-xl transition duration-300"
                >
                  <h3 className="font-bold text-gray-800 mt-2 text-xl md:text-2xl">Winners:</h3>
                  <div className="flex gap-4 items-center bg-gray-100 px-5 py-3 rounded-xl w-full my-2">
                    <FaMedal size={24} className="text-yellow-400" />
                    <h1 className="text-lg font-medium pt-0">
                      {result.first.name}
                      <br />
                      {result.first.sem}, {getSquad(result.first.squad)}
                    </h1>
                  </div>
                  <div className="flex gap-4 items-center  bg-gray-100 px-5 py-3 rounded-xl w-full my-2">
                    <FaMedal size={24} className="text-gray-400" />
                    <h1 className="text-lg font-medium pt-0">
                      {result.second.name}
                      <br />
                      {result.second.sem}, {getSquad(result.second.squad)}
                    </h1>
                  </div>
                  <div className="flex gap-4 items-center  bg-gray-100 px-5 py-3 rounded-xl w-full my-2">
                    <FaMedal size={24} className="text-amber-800" />
                    <h1 className="text-lg font-medium pt-0">
                      {result.third.name}
                      <br />
                      {result.third.sem}, {getSquad(result.third.squad)}
                    </h1>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;