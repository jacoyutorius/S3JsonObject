const S3Json = require("../libs/S3Json")
const expect = require("expect")

describe("S3Json", () => {
  it("Data", async () => {
    const s3Json = new S3Json('hiroba-bucket', 'hiroba/hiroba_201912.json');
    const data = await s3Json.Data();
    const hirobaNames = Object.keys(data);

    expect(hirobaNames).toContain("ここみの森")
    expect(hirobaNames).toContain("なごみCIRCUS（サーカス）")
    expect(hirobaNames).toContain("OHANA")
    expect(hirobaNames).toHaveLength(24)
  })
});