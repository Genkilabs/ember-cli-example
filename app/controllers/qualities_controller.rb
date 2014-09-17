class QualitiesController < ApplicationController
  before_action :set_quality, only: [:show, :edit, :update, :destroy]

  # GET /qualities
  # GET /qualities.json
  def index
    @qualities = Quality.all
  end

  # GET /qualities/1
  # GET /qualities/1.json
  def show
  end

  # GET /qualities/new
  def new
    @quality = Quality.new
  end

  # GET /qualities/1/edit
  def edit
  end

  # POST /qualities
  # POST /qualities.json
  def create
    @quality = Quality.new(quality_params)

    respond_to do |format|
      if @quality.save
        format.html { redirect_to @quality, notice: 'Quality was successfully created.' }
        format.json { render :show, status: :created, location: @quality }
      else
        format.html { render :new }
        format.json { render json: @quality.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /qualities/1
  # PATCH/PUT /qualities/1.json
  def update
    respond_to do |format|
      if @quality.update(quality_params)
        format.html { redirect_to @quality, notice: 'Quality was successfully updated.' }
        format.json { render :show, status: :ok, location: @quality }
      else
        format.html { render :edit }
        format.json { render json: @quality.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /qualities/1
  # DELETE /qualities/1.json
  def destroy
    @quality.destroy
    respond_to do |format|
      format.html { redirect_to qualities_url, notice: 'Quality was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quality
      @quality = Quality.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def quality_params
      params.require(:quality).permit(:name, :person_id)
    end
end
