import axios from "axios";
import { useEffect, useState } from "react";

export default function TableCompanies() {
  const [entities, setEntities] = useState<any[]>([]);

  useEffect(() => {
    getEntities()
  }, [])

  const getEntities = async () => {
    try {
      const response = await fetch('/api/machines')
      const data = await response.json();
      setEntities(data);

    } catch (error) {
      console.error("Error fetching:", error);
    }
  }

  const updateEntity = async (updatedData) => {
    try {
      await axios.put(`/api/machines/${updatedData.id}`, updatedData)
      location.reload()

    } catch (error) {
      console.error("Error fetching:", error);
    }
  }

  const deleteEntity = async (deletedData) => {
    try {
      await axios.delete(`/api/machines/${deletedData.id}`)
      location.reload()

    } catch (error) {
      console.error("Error fetching:", error);
    }
  }

  return (
    <div className="pl-5 pr-5">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#07314a] text-white">
            <tr>
              <th className="w-1/12 px-2 py-3 text-left xs:text-[13px] text-base md:text-lg font-medium">Id</th>
              <th className="w-3/12 px-2 py-3 text-left xs:text-[13px] text-base md:text-lg font-medium">Name</th>
              <th className="w-3/12 px-2 py-3 text-left xs:text-[13px] text-base md:text-lg font-medium">Line ID</th>
              <th className="w-3/12 px-2 py-3 text-left xs:text-[13px] text-base md:text-lg font-medium"></th>
              <th className="w-2/12 px-2 py-3 text-left xs:text-[13px] text-base md:text-lg font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {entities.map((entity) => (
              <tr key={entity.id}>
                <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">{entity.id}</td>
                <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">
                  <input type="text" placeholder={entity.name}  onChange={(e) => {
                    entity.name = e.target.value
                  }} />
                </td>
                <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">
                  <input type="text" placeholder={entity.line_id}  onChange={(e) => {
                    entity.line_id = e.target.value
                  }} />
                </td>
                <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium"></td>
                <td className="px-2 py-4 xs:text-[13px] text-base md:text-lg font-medium">
                  <button onClick={() => updateEntity(entity)}>
                    Edit
                  </button>
                  <button className="ml-4 text-[#FF0000]" onClick={() => deleteEntity(entity)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
